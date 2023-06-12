import PropTypes from 'prop-types';
export const Controls = ({ onChange, current, totalItems }) => {
  return (
    <section>
      <button
        type="button"
        disabled={current === 1}
        onClick={() => onChange(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        disabled={current === totalItems}
        onClick={() => onChange(+1)}
      >
        Вперед
      </button>
    </section>
  );
};
Controls.propTypes = {
  onChange: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};
