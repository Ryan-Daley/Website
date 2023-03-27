declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]];

	// This needs to be in sync with ImageMetadata
	export const image: () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	const entryMap: {
		"blog": {
"2022-05-20-new-homepage.md": {
  id: "2022-05-20-new-homepage.md",
  slug: "2022-05-20-new-homepage",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2022-06-28-new-mac.md": {
  id: "2022-06-28-new-mac.md",
  slug: "2022-06-28-new-mac",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2022-12-19-monocular-visual-odometry.md": {
  id: "2022-12-19-monocular-visual-odometry.md",
  slug: "2022-12-19-monocular-visual-odometry",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"2022-12-29-natural-gradient-decent.md": {
  id: "2022-12-29-natural-gradient-decent.md",
  slug: "2022-12-29-natural-gradient-decent",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2017-06-09-my-high-school-life.md": {
  id: "zh/2017-06-09-my-high-school-life.md",
  slug: "zh/2017-06-09-my-high-school-life",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2018-02-17-nlp-resource.md": {
  id: "zh/2018-02-17-nlp-resource.md",
  slug: "zh/2018-02-17-nlp-resource",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2018-09-01-p-value.md": {
  id: "zh/2018-09-01-p-value.md",
  slug: "zh/2018-09-01-p-value",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2018-11-11-zelda-horizon.md": {
  id: "zh/2018-11-11-zelda-horizon.md",
  slug: "zh/2018-11-11-zelda-horizon",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2018-11-30-dynamo.md": {
  id: "zh/2018-11-30-dynamo.md",
  slug: "zh/2018-11-30-dynamo",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2018-12-22-note-of-linear-algebra.md": {
  id: "zh/2018-12-22-note-of-linear-algebra.md",
  slug: "zh/2018-12-22-note-of-linear-algebra",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2019-02-15-rnn-with-its-friends.md": {
  id: "zh/2019-02-15-rnn-with-its-friends.md",
  slug: "zh/2019-02-15-rnn-with-its-friends",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2019-04-03-racf-experiment.md": {
  id: "zh/2019-04-03-racf-experiment.md",
  slug: "zh/2019-04-03-racf-experiment",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2019-07-06-last-three-years.md": {
  id: "zh/2019-07-06-last-three-years.md",
  slug: "zh/2019-07-06-last-three-years",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2020-02-24-the-enigmatic-appeal-of-video-games-greatest-bards.md": {
  id: "zh/2020-02-24-the-enigmatic-appeal-of-video-games-greatest-bards.md",
  slug: "zh/2020-02-24-the-enigmatic-appeal-of-video-games-greatest-bards",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2020-02-29-image-aesthetic-assessment.md": {
  id: "zh/2020-02-29-image-aesthetic-assessment.md",
  slug: "zh/2020-02-29-image-aesthetic-assessment",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2020-03-17-papers-reading.md": {
  id: "zh/2020-03-17-papers-reading.md",
  slug: "zh/2020-03-17-papers-reading",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2020-07-10-messy-notes.md": {
  id: "zh/2020-07-10-messy-notes.md",
  slug: "zh/2020-07-10-messy-notes",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2020-07-17-transformer.md": {
  id: "zh/2020-07-17-transformer.md",
  slug: "zh/2020-07-17-transformer",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2020-08-05-meta-learning.md": {
  id: "zh/2020-08-05-meta-learning.md",
  slug: "zh/2020-08-05-meta-learning",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2020-08-16-bayesian-neural-network.md": {
  id: "zh/2020-08-16-bayesian-neural-network.md",
  slug: "zh/2020-08-16-bayesian-neural-network",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2020-08-22-bocd.md": {
  id: "zh/2020-08-22-bocd.md",
  slug: "zh/2020-08-22-bocd",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2020-08-24-regularization-based-continual-learning.md": {
  id: "zh/2020-08-24-regularization-based-continual-learning.md",
  slug: "zh/2020-08-24-regularization-based-continual-learning",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2020-10-07-my-blog.md": {
  id: "zh/2020-10-07-my-blog.md",
  slug: "zh/2020-10-07-my-blog",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2021-01-01-new-year.md": {
  id: "zh/2021-01-01-new-year.md",
  slug: "zh/2021-01-01-new-year",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2021-01-28-lets-talk-about-pytorch.md": {
  id: "zh/2021-01-28-lets-talk-about-pytorch.md",
  slug: "zh/2021-01-28-lets-talk-about-pytorch",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2021-04-26-pc-algorithm.md": {
  id: "zh/2021-04-26-pc-algorithm.md",
  slug: "zh/2021-04-26-pc-algorithm",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2021-06-12-svm.md": {
  id: "zh/2021-06-12-svm.md",
  slug: "zh/2021-06-12-svm",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2021-07-27-fisher-information-matrix.md": {
  id: "zh/2021-07-27-fisher-information-matrix.md",
  slug: "zh/2021-07-27-fisher-information-matrix",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2021-07-28-natural-gradient-decent.md": {
  id: "zh/2021-07-28-natural-gradient-decent.md",
  slug: "zh/2021-07-28-natural-gradient-decent",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2021-08-31-attention-conv.md": {
  id: "zh/2021-08-31-attention-conv.md",
  slug: "zh/2021-08-31-attention-conv",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2022-01-29-travel-to-boston.md": {
  id: "zh/2022-01-29-travel-to-boston.md",
  slug: "zh/2022-01-29-travel-to-boston",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2022-02-21-new-year-2022.md": {
  id: "zh/2022-02-21-new-year-2022.md",
  slug: "zh/2022-02-21-new-year-2022",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
"zh/2023-03-24-new-year-2023.md": {
  id: "zh/2023-03-24-new-year-2023.md",
  slug: "zh/2023-03-24-new-year-2023",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] },
},

	};

	type ContentConfig = typeof import("../src/content/config");
}
