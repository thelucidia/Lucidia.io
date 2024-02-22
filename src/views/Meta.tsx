import { Helmet } from 'react-helmet';

const Meta = (props: any) => {
  const { title, keywords, description, noIndex } = props;
  return (
    <Helmet>
      <title>{[title, 'LUCIDIA'].filter(Boolean).join(' | ')}</title>
      <meta name="og:title" content={[title, 'LUCIDIA'].filter(Boolean).join(' | ')} />
      <meta name="twitter:title" content={[title, 'LUCIDIA'].filter(Boolean).join(' | ')} />
      {Boolean(keywords && keywords.length) && <meta name="keywords" content={keywords.join(', ')} />}
      {Boolean(description) && <meta name="description" content={description} />}
      {Boolean(description) && <meta name="og:description" content={description} />}
      {Boolean(description) && <meta name="twitter:description" content={description} />}
      <meta name="google-site-verification" content="" />
      {Boolean(noIndex) && <meta name="robots" content="noindex" />}
      {Boolean(noIndex) && <meta name="googlebot" content="noindex" />}
      {!noIndex && <meta name="robots" content="index,follow" />}
    </Helmet>
  );
};

export default Meta;
