import PropTypes from 'prop-types';
import { Wrapper } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </Wrapper>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
