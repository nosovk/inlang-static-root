import { sveltekit } from "@sveltejs/kit/vite";
import inlangPlugin from "@inlang/sdk-js/adapter-sveltekit";
import { type UserConfig, loadEnv } from "vite";

process.env = { ...process.env, ...loadEnv("", process.cwd()) };

const config: UserConfig = {
	plugins: [inlangPlugin(), sveltekit()],
	server: {
		proxy: {
			"/api": {
				target: "https://test-catcasino.egamings.com/api/v1",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
				configure: (proxy, options) => {
					// proxy will be an instance of 'http-proxy'
					const username = "wlc";
					const password = "wlcdemo";
					options.auth = `${username}:${password}`;
					if (process.env.VITE_PROXY_DEBUG) {
						console.log("VITE_PROXY_DEBUG enabled, additional debug messages will be in log");
						proxy.on("error", (err, _req, _res) => {
							console.log("proxy error", err);
						});
						proxy.on("proxyReq", (proxyReq, req, _res) => {
							console.log("Sending Request to the Target:", req.method, req.url, proxyReq.path);
						});
						proxy.on("proxyRes", (proxyRes, req, _res) => {
							console.log("Received Response from the Target:", proxyRes.statusCode, req.url);
						});
					}
				},
			},
		},
	},
};

export default config;
