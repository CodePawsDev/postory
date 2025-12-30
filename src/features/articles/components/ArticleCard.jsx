export function ArticleCard({
  image,
  category,
  title,
  description,
  author,
  authorAvatar,
  date,
}) {
  return (
    <article className="w-full max-w-full overflow-hidden space-y-3">
      {/* Image */}
      <div className="w-full aspect-4/3 rounded-xl overflow-hidden bg-brown-200">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Category */}
      <span className="inline-block px-2 py-0.5 rounded-full text-body-3 bg-brand-orange text-white">
        {category}
      </span>

      {/* Title */}
      <h3 className="text-headline-4 text-brown-600 line-clamp-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-body-2 text-brown-400 line-clamp-2">{description}</p>

      {/* Author Meta */}
      <div className="flex items-center gap-2 text-body-3 text-brown-400">
        {/* Avatar */}
        <img
          src={authorAvatar}
          alt={author}
          className="w-6 h-6 rounded-full object-cover"
        />

        {/* Name */}
        <span className="text-brown-600 font-medium">{author}</span>

        {/* Separator */}
        <span className="text-brown-300">|</span>

        {/* Date */}
        <span>{date}</span>
      </div>
    </article>
  );
}
