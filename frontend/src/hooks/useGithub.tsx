import axios from "axios";
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
		axios
			.get("https://api.github.com/repos/nickspaargaren/no-google")
			.then((res) => {
				setGithub({ data: res.data, loading: false, error: null });
			})
			.catch((err) => {
				setGithub({ data: null, loading: false, error: err.message });
			});
	}, []);

	return github;
};

export default useGithub;
