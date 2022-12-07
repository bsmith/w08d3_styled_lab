const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const CommentCard = ({imageUrl, userName, datePosted, children}) => {
    return <>
        <img src={imageUrl} alt="comment"/>
        <p>{userName}</p>
        <p>{dayjs().to(dayjs(datePosted))}</p>
        <p>{children}</p>
    </>
}

export default CommentCard;
