import * as React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';

type Props = {
  document: {
    nodeType: BLOCKS.DOCUMENT;
    content: any[];
    data: any;
  };
};

function getObjectKeyArray(obj: any): string[] {
  if (typeof obj !== 'object') return [];
  const arr: string[] = [];
  Object.keys(obj).map(key => arr.push(key));
  return arr;
}

const ContentfulRichText: React.FC<Props> = ({ document }: Props) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        if (!node.data.target.fields) return <></>;
        const { file, description } = node.data.target.fields;
        const locales = getObjectKeyArray(file);
        return locales.map((locale: string): any => (
          <img
            src={file[locale].url}
            alt={description[locale]}
            data-locale={locale}
            key={locale}
          />
        ));
      },
    },
  };
  return <div>{documentToReactComponents(document, options)}</div>;
};
export default ContentfulRichText;
