export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","title.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.07dead55.js","imports":["_app/immutable/entry/start.07dead55.js","_app/immutable/chunks/index.49a1fc66.js","_app/immutable/chunks/singletons.d95cd4af.js","_app/immutable/chunks/index.50efabe1.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.12ad2d60.js","imports":["_app/immutable/entry/app.12ad2d60.js","_app/immutable/chunks/index.49a1fc66.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
