import { graphql, useStaticQuery } from 'gatsby';
import React, { Component, useEffect, useState } from 'react';
import Layout from '../layout';
import SEO from '../seo';

const Post = ({ pageContext, data }) => {
    
    const { id } = pageContext

    const [title, setTitle] = useState(data.strapiPost.title)
    const [content, setContent] = useState(data.strapiPost.content)

    return (
        <Layout>
            <SEO title="Oferta" />
            <h2>{title}</h2>
            <p>{content}</p>
        </Layout>
    );
}

export default Post

export const query = graphql`
    query Offer($id: String) {
        strapiPost(id: {eq: $id}) {
            id
            content
            title
        }
    }
`