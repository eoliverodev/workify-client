import Head from "next/head";
import { IHeadTagProps } from '../index.d.ts';

function HeadTag({ title }: IHeadTagProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="description" content="Workify application" />
      <meta name="keywords" content="Nextjs, Nodejs, Javascript, Typescript, Workify" />
      <meta name="author" content="Erik Olivero, Antonio Guiotto" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="icon" href="/favicon.ico" />

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
  );
}

export default HeadTag;
