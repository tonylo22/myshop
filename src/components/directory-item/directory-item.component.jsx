import { DirectoryItemContainer, BackgroundImage, Body } from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = (props) => {
    const {title, imageUrl, route} = props.category;
    const navigate = useNavigate();
    return (
      <DirectoryItemContainer onClick={ e => navigate(route) } >
          <BackgroundImage imageUrl={imageUrl} />
          <Body>
              <h2>{title}</h2>
              <p>Shop Now</p>
          </Body>
      </DirectoryItemContainer>
    );
};

export default DirectoryItem;