import { useEffect, useState } from "react";

type GithubType = {
  data: any;
  loading: boolean;
  error: string | null;
};
const useGithub = (): GithubType => {
  const [github, setGithub] = useState<GithubType>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/nickspaargaren/no-google")
      .then((res) => res.json())
      .then((data) => {
        setGithub({ data, loading: false, error: null });
      })
      .catch((err) => {
        setGithub({ data: null, loading: false, error: err.message });
      });
  }, []);

  return github;
};

export default useGithub;
