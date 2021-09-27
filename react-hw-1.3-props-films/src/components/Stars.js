import Star from "./Star";
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default function Stars({count}) {
    if (count < 1 || count > 5 || !Number.isInteger(count)) {
        return false;
    }

    const stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(i);
    }

    return(
        <ul className='card-body-stars'>
            {stars.map((element) => <li key={shortid.generate()}><Star /></li>)}
        </ul>
    );
}

Stars.propTypes = {
    count: PropTypes.number.isRequired,
}

Stars.defaultProps = {
    count: 0,
}