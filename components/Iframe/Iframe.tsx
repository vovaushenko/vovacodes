import React from 'react';

interface Props {
  title: string;
  iframeSrc: string;
  iframeSize: { width: string; height: string };
  style?: Record<string, unknown>;
}

/**
 *Renders Iframe with specified params. Used to embed external apps | services in windows.
 *@function Iframe
 *@param {string} title - title of iframe
 *@param {string} iframeSrc - url of iframe
 *@param {object} iframeSize - size of iframe window, eg 100% or 100px
 *@param {Record<string, unknown>} style - inline css styles to be applied
 *@returns {JSX.Element} - Rendered Iframe component
 */
const Iframe = ({
  title,
  iframeSrc,
  iframeSize,
  style,
}: Props): JSX.Element => {
  return (
    <iframe
      src={iframeSrc}
      title={title}
      width={iframeSize.width}
      height={iframeSize.height}
      style={style}
    />
  );
};

export default Iframe;
