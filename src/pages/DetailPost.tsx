import { API, graphqlOperation } from "aws-amplify";
import { useParams } from "react-router-dom"
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { getPost } from "../graphql/queries";
import { useEffect, useState } from "react";
import {
    Button,
    Flex,
    Heading,
    Text,
} from "@aws-amplify/ui-react";
import { createPostLike } from "../graphql/mutations";



export default function DetailPost() {
    const { id } = useParams();
    const [post, setPost] = useState<any>({});

    async function loadPost() {
        const postsData = await API.graphql({ ...graphqlOperation(getPost, { id }), authMode: 'AMAZON_COGNITO_USER_POOLS' });
        const data = (postsData as GraphQLResult<any>).data;
        console.log(data);
        setPost(data.getPost);
    }

    async function like() {
        await API.graphql({ ...graphqlOperation(createPostLike, { input: { postID: id } }), authMode: 'AMAZON_COGNITO_USER_POOLS' });
        await loadPost();
    }

    useEffect(() => {
        loadPost();
    }, []);

    if (!id) return <></>;

    return <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem"
    >
        <Heading level={3}>{post.title}</Heading>
        <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem"
        >
            <Text>Last updated: {new Date(post.updatedAt).toLocaleString('en-US')}</Text>
            <Text>Created by: {post.owner}</Text>
            <Text>Likes: {post.likes?.items?.length ?? 0}</Text>
            <Text>Comments: {post.comments?.items?.length ?? 0}</Text>
        </Flex>
        <Text>{post.content}</Text>
        <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem"
        >
            <Button onClick={like}>Like</Button>
        </Flex>
    </Flex>
}