import React, { useState, useEffect } from "react";
import axios from "axios";

const useGithub = () => {
  const [github, setGithub] = useState<{
    data: any;
    loading: boolean;
    error: string | null;
  }>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/repos/nickspaargaren/no-google"
        );
        const { data } = res;
        setGithub({ data: data, loading: false, error: null });
      } catch (err) {
        setGithub({ data: null, loading: false, error: err.message });
      }
    };

    LoadData();
  }, []);

  return github;
};

export default useGithub;
