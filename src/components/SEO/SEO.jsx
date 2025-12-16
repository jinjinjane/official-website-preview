import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export const SEO = ({ title, description, keywords, type = 'website' }) => {
  const siteTitle = 'Jovida';
  const defaultDescription = 'Meet Jovida, your 24/7 AI Health Coach and Nutritionist. Master weight loss, diet management, and holistic wellness with personalized AI guidance.';
  const defaultKeywords = 'Jovida, AI Weight Loss, Weight Management, Diet Management, AI Nutritionist, AI Health Coach, Wellness Companion';

  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - AI Weight Loss & Diet Coach | Your Personal Nutritionist`;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      {/* <meta property="og:image" content={image} /> */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {/* <meta name="twitter:image" content={image} /> */}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  type: PropTypes.string,
};
