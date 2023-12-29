export type TagType = {
  title: string;
  image: GatsbyImageType;
};

export type GatsbyImageType = {
  asset: {
    gatsbyImageData: {
      backgroundColor: string;
      height: number;
      images: {
        fallback: {
          sizes: string;
          src: string;
          srcSet: string;
        };
        sources: [
          {
            sizes: string;
            srcSet: string;
            type: string;
          },
        ];
      };
      layout: "fixed" | "fullWidth" | "constrained";
      width: number;
    };
  };
};

export type favoriteListType = { id: string; skill: string }[];
