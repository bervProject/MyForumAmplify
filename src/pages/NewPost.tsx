import { useState } from 'react';
import {
    Button,
    CheckboxField,
    Flex,
    TextField,
    TextAreaField,
} from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import { createPost } from '../graphql/mutations';



export default function NewPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [isDraft, setIsDraft] = useState(false);

    async function onSubmit() {
        console.log(title);
        console.log(content);
        console.log(isDraft);
        const result = await API.graphql({ ...graphqlOperation(createPost, { input: { title, content, draft: isDraft } }), authMode: 'AMAZON_COGNITO_USER_POOLS' })
        console.log(result);
    }

    return <Flex
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem"
    >
        <TextField
            descriptiveText="Enter a title"
            isRequired={true}
            onChange={(e: any) => setTitle(e.currentTarget.value)}
            placeholder="Title"
            label="Title"
            errorMessage="There is an error"
        />
        <TextAreaField
            descriptiveText="Enter the content"
            isRequired={true}
            onChange={(e: any) => setContent(e.currentTarget.value)}
            placeholder="Content"
            label="Content"
            errorMessage="There is an error"
        />
        <CheckboxField
            name="is-draft-controlled"
            value="yes"
            label="Draft"
            checked={isDraft}
            onChange={(e: any) => setIsDraft(e.target.checked)}
        />
        <Button onClick={onSubmit}>Submit</Button>
    </Flex>;
}