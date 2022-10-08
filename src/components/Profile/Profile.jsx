import PropTypes from 'prop-types';
import {
  Wrapper,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="60" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats class="stats">
        <li>
          <Label class="label">Followers</Label>
          <Quantity class="quantity">{followers}</Quantity>
        </li>
        <li>
          <Label class="label">Views</Label>
          <Quantity class="quantity">{views}</Quantity>
        </li>
        <li>
          <Label class="label">Likes</Label>
          <Quantity class="quantity">{likes}</Quantity>
        </li>
      </Stats>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
