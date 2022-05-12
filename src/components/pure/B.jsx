import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import A from "./A"


const B = () => {

    const default_contact = new Contact('Carlos', 'Castaño', 'carlos@gmail.com', true)

    return (
        <div>
            <A contact={ default_contact }></A>
        </div>
    );
};


B.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default B;
