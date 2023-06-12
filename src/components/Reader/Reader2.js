export const Reader = ({ onChangeIndex, index, items }) => {
  const currentPublication = items[index];
  const totalItems = items.length;
  return (
    <div>
      {/* <section>
        <button
          type="button"
          disabled={index === 0}
          onClick={() => onChangeIndex(-1)}
        >
          Назад
        </button>
        <button
          type="button"
          disabled={index + 1 === totalItems}
          onClick={() => onChangeIndex(+1)}
        >
          Вперед
        </button>
      </section> */}
      {/* 
      <p>
        {index + 1}/{totalItems}
      </p> */}

      {
        <article>
          <h2>{currentPublication.title}</h2>
          <p>{currentPublication.text}</p>
        </article>
      }
    </div>
  );
};
