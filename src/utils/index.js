import React from 'react';
import loadable from '@loadable/component'

import IconSlider from '../components/icon-slider';
import ImageHeroSlider from '../components/image-hero-slider';
import TitleHero from '../components/title-hero';

const JSXComponents = {
  StatsBlocks: (props) => { 
    const StatsBlocks = loadable(()=>import('../components/stats-blocks'));
    return (<StatsBlocks {...props} />);
  },
  TeamAdmin: (props) => { 
    const TeamAdmin = loadable(()=>import('../components/team-admin'));
    return (<TeamAdmin {...props} />);
  },
  TeamConsole: (props) => { 
    const TeamConsole = loadable(()=>import('../components/team-console'));
    return (<TeamConsole {...props} />);
  },
  StatsEventsBlocks: (props) => { 
    const StatsEventsBlocks = loadable(()=>import('../components/stats-events-blocks'));
    return (<StatsEventsBlocks {...props} />);
  },
  AnimatedWordsHero: (props) => { 
    const AnimatedWordsHero = loadable(()=>import('../components/animated-words-hero'));
    return (<AnimatedWordsHero {...props} />);
  },
  Contributions: (props) => { 
    const Contributions = loadable(()=>import('../components/contributions'));
    return (<Contributions {...props} />);
  },
  Presentations: (props) => { 
    const Presentations = loadable(()=>import('../components/presentations'));
    return (<Presentations {...props} />);
  },
  BlogArchive: (props) => { 
    const BlogArchive = loadable(()=>import('../components/blog-archive'));
    return (<BlogArchive {...props} />);
  },
  ContactFormInfo: (props) => { 
    const ContactFormInfo = loadable(()=>import('../components/contact-form-info'));
    return (<ContactFormInfo {...props} />);
  },
}

export const componentResolver = (data) => {
  const components = [];
  data.forEach(element => {
    if (element.__typename === `paragraph__image_slider`) {
      const paragraph__image_slider = [];
      element.relationships.field_slide.forEach(field_slide => {
        paragraph__image_slider.push({
          image: field_slide.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid,
          ctaText: field_slide.field_title.processed,
          ctaLink: field_slide.field_cta_link.alias,
          ctaLinkText: field_slide.field_cta_link.title,
        })
      })

      components.push(<ImageHeroSlider slides={paragraph__image_slider} />);
    }

    if (element.__typename === `paragraph__hero`) {
      const title = element.field_title ? element.field_title.processed : '';
      const image = element.relationships.field_background_image.relationships.field_media_image.localFile.childImageSharp.fluid;

      components.push(<TitleHero title={title} image={image} />);
    }

    if (element.__typename === `paragraph__text_content`) {
      const TextBlock = loadable(() => import('../components/text-block'));
      const title = element.field_title ? element.field_title.processed : '';
      const text = element.field_text_block.processed;
      const verticalSeparator = element.field_vertical_separator || false;
      const bigTitle = element.field_big_title || false;
      const fullWidth = element.field_full_width || false;

      components.push(<TextBlock title={title} verticalSeparator={verticalSeparator} bigTitle={bigTitle} fullWidth={fullWidth}>{text}</TextBlock>);
    }

    if (element.__typename === `paragraph__grid_card`) {
      const CardsGroup = loadable(() => import('../components/cards-group'));
      const paragraph__grid_card = [];
      const title = element.field_text_title || ''
      element.relationships.field_card.forEach(field_card => {
        paragraph__grid_card.push({
          title: field_card.field_text_title || '',
          subtitle: field_card.field_subtitle || '',
          content: field_card.field_body.processed,
          ctaLink: field_card.field_link ? field_card.field_link.alias: '#',
          ctaLinkText: field_card.field_footer ? field_card.field_footer.processed : '',
          color: field_card.field_text_color || '',
        })
      })

      components.push(<CardsGroup title={title} cards={paragraph__grid_card}/>);
    }

    if (element.__typename === `paragraph__partners`) {
      const paragraph__partners = [];
      element.relationships.field_partner_paragraph.forEach(field_partner_paragraph => {
        paragraph__partners.push({
          image: field_partner_paragraph.relationships.field_logo.relationships.field_media_image.localFile.childImageSharp.fluid,
          link: field_partner_paragraph.field_website.uri
        })
      })

      components.push(<IconSlider icons={paragraph__partners} />);
    }

    if (element.__typename === `paragraph__cta`) {
      const Cta = loadable(() => import('../components/cta'));
      const link = element.field_cta_link.alias;
      const text = element.field_text.processed;
      const color = 'primary'; //element.field_bg_color;

      components.push(<Cta link={link} text={text} color={color} />);
    }

    if (element.__typename === `paragraph__two_images`) {
      const TwoImages = loadable(() => import('../components/two-images'));
      const firstImage = element.relationships.field_first_image.relationships.field_media_image.localFile?element.relationships.field_first_image.relationships.field_media_image.localFile.childImageSharp.fluid:null;
      const secondImage = element.relationships.field_second_image.relationships.field_media_image.localFile?element.relationships.field_second_image.relationships.field_media_image.localFile.childImageSharp.fluid:null;
      components.push(<TwoImages firstImage={firstImage} secondImage={secondImage} firstImageWidth="w-8/12" secondImageWidth="w-4/12" />);
    }

    if (element.__typename === `paragraph__text_list`) {
      const title = element.field_title ? element.field_title.processed : ''
      const field_display = element.field_display
      const paragraph__text_list = [];
      element.relationships.field_simple_list_item.forEach(field_simple_list_item => {
        paragraph__text_list.push({
          title: field_simple_list_item.field_title.processed,
          content: field_simple_list_item.field_body.processed
        })
      })

      if (field_display === 'Default') {
        const TextList = loadable(() => import('../components/text-list'));
        components.push(<TextList title={title} items={paragraph__text_list} />);
      }

      if (field_display === 'TwoBlockGrid') {
        const TwoBlockGrid = loadable(() => import('../components/two-block-grid'));
        components.push(<TwoBlockGrid title={title} columns={paragraph__text_list} />);
      }

      if (field_display === 'BlockList') {
        const BlockList = loadable(() => import('../components/block-list'));
        components.push(<BlockList title={title} items={paragraph__text_list} />);
      }

      if (field_display === 'Accordion') {
        const Accordion = loadable(() => import('../components/accordion'));
        components.push(<Accordion title={title} items={paragraph__text_list} />);
      }
    }

    if (element.__typename === `paragraph__highlighted_careers`) {
      const HighlightedCareers = loadable(() => import('../components/careers-intro'));
      const title = element.field_title.processed;
      const content = element.field_body.processed;
      const careers = [];
      element.relationships.field_career_item.forEach(career => {
        careers.push({
          title: career.field_title.processed,
          subtitle: career.field_text_title,
          location: career.field_subtitle,
          link: career.relationships.field_career.path.alias,
        })
      })

      components.push(<HighlightedCareers title={title} content={content} careers={careers}  />);
    }

    if (element.__typename === `paragraph__featured_quotes`) {
      const FeaturedQuotes = loadable(() => import('../components/join-team-reasons'));
      const title = element.field_title.processed;
      const content = element.field_body.processed;
      const cta = {
        link: element.field_link.alias
      }
      const quotes = [];
      element.relationships.field_quote_items.forEach(quote => {
        quotes.push({
          title: quote.field_text_title,
          content: quote.field_body.processed
        })
      })

      components.push(<FeaturedQuotes title={title} subtitle={content} quotes={quotes} cta={cta} />);
    }

    if (element.__typename === `paragraph__image`) {
      const Image = loadable(() => import('../components/image'));
      const image = element.relationships.field_image.relationships.field_media_image.localFile.childImageSharp.fluid;

      components.push(<Image image={image} />);
    }

    if (element.__typename === `paragraph__jsx_component`) {
      const Component = JSXComponents[element.field_component];
      const title = element.field_title ? element.field_title.processed : '';
      const text = element.field_text_block ? element.field_text_block.processed : '';
      if (Component){
        components.push(<Component title={title} text={text} />);
      } else {
        console.error(`Invalid component: ${element.field_component} data`);
      }
    }

  })

  return components;
}