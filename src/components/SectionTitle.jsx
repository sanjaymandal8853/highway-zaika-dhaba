function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="font-bold uppercase tracking-[0.2em] text-orange-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-black sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-7 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;