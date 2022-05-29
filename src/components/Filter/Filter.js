import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name</Label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
