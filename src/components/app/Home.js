import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { Component } from 'react';
import Layout from '../layout';
import SEO from '../seo';
import SearchBar from './SearchBar';


const Home = () => {

    const data = useStaticQuery(graphql`
        query {
            allStrapiPost(limit: 10, sort: {fields: publishDate}, filter: {verified: {eq: true}, enabled: {eq: true}}) {
                nodes {
                    id
                    title
                    price
                    description
                    photos {
                        url
                        alternativeText
                    }
                    location {
                        name
                    }
                }
            }
        }
    `)

    let formatter = new Intl.NumberFormat('pl-PL', {
        style: 'currency',
        currency: 'PLN',
    });

    // fetch("https://api.giphy.com/v1/gifs/random?api_key=aTeDFfy209xXRHnqs2oTTxx4KX35zpuw&tag=poland&rating=g")
    //     .then(res => res.json())
    //     .then(function (res) {
    //         document.getElementsByTagName('body')[0].style.background = 'url(' + res.data.image_url + ')'
    //     });

    return (
        <Layout>
            <SEO title="Home Page" />

            <div className="container text-center">
                <div className="row justify-content-md-center mt-3" style={{ transitionDuration: '0.5s' }}>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">
                        <SearchBar />
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {data.allStrapiPost?.nodes.map((node) => {
                        let text, last, promo_img
                        if (node.description.length > 100) {
                            text = node.description.substring(0, 100)
                            last = text.lastIndexOf(" ")
                            text = text.substring(0, last)
                            node.description = text + `...`
                        }
                        if (node.title.length > 35) {
                            node.title = node.title.slice(0, 35) + '...'
                        }
                        promo_img = `${process.env.GATSBY_API_URL}${node.photos[0]?.url}`
                        if (node.photos.length < 1) {
                            promo_img = null
                        }

                        return (
                            <div className="col mb-4" key={node.id}>
                                <div className="card border-0 mx-auto h-100" style={{ maxWidth: 240 }}>
                                    {(promo_img != null) ? (
                                        <>
                                            <div className="border-0 d-flex align-items-center justify-content-center bg-transparent" style={{ height: 150, overflow: 'hidden', margin: '1rem' }}>
                                                <Link to={`/offer/${node.id}`}>
                                                    <img src={promo_img} className="w-100" alt={node.photos[0]?.alternativeText} />
                                                </Link>
                                            </div>
                                        </>
                                    ) : null}
                                        <div className="card-body">
                                                <Link to={`/offer/${node.id}`} className="text-body" style={{textDecoration: 'none'}}>
                                                <h5 className="card-title">{node.title}</h5>
                                                </Link>
                                                <span>{node.description}</span>
                                            </div>

                                    <div className="card-footer bg-transparent border-0">
                                        <strong className="float-left">{formatter.format(node.price)}</strong>
                                        <small className="float-right text-muted">{node.location.name}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </Layout>
    );
}

export default Home

function getRandomColor() {
    var letters = 'CDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}