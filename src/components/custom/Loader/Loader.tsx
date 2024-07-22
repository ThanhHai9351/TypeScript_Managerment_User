import { ReactComponent as Ring } from '../../../assets/oval.svg';

const Loader = () => {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="text-primary" style={{ width: '300px', height: '300px' }}>
                <Ring />
            </div>
        </div>
    );
};

export default Loader;
