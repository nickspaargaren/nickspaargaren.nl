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
          }
        ];
      };
      layout: "fixed" | "fullWidth" | "constrained";
      width: number;
    };
  };
};

export type useSkillsDataType = {
  exclude: boolean;
  id: string;
  image: GatsbyImageType;
  percentage: number;
  title: string;
};
