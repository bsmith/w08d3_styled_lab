import styled from 'styled-components';

const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

const CardLayout = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #f0eded;
    padding: 0.5rem;
    margin: 0.5rem;
    gap: 0.5rem;
`;

const Information = styled.div`
    display: flex;
    flex-direction: column;
`;

const BottomList = styled.ul`
    display: flex;
    /* list-style: none; */
    padding: 0;
    /* gap: 0.25rem; */
`;

const BottomSpan = styled.span`
    ;
`;

const BottomItem = styled.li`
    list-style-type: disc;
    list-style-position: inside;
    
    &:first-child {
        list-style: none;
        > ${BottomSpan} {
            margin-left: 0;
        }
    }

    > ${BottomSpan} {
        margin-left: -0.25rem;
        margin-right: 0.75rem;
    }

    &::marker {
        margin: 20rem;
        /* color: red; */
        text-indent: -20rem;
    }
`;


const CommentCard = ({imageUrl, userName, datePosted, children}) => {
    return <CardLayout>
        <img src={imageUrl} alt="comment"/>
        <Information>
            <a href="example.com">{userName}</a>
            <p>{children}</p>
            <BottomList>
                <BottomItem><BottomSpan><a href="like">Like</a></BottomSpan></BottomItem>
                <BottomItem><BottomSpan><a href="Reply">Reply</a></BottomSpan></BottomItem>
                <BottomItem><BottomSpan>{dayjs().to(dayjs(datePosted))}</BottomSpan></BottomItem>
            </BottomList>
        </Information>
    </CardLayout>
}

export default CommentCard;
