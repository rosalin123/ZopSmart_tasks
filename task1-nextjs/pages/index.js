import Head from 'next/head';
import Layout from '../components/Layout';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchPosts } from '../Utils/postApiUtil';
import { fetchUsers } from '../Utils/usersApiUtil';
import { connect } from 'react-redux';
import PostsContainer from '../components/PostsContainer';

import Fetch from 'isomorphic-unfetch';

const Home = (props) => {
  return (
    <Layout>
      <PostsContainer users={props.users} posts={props.posts} />
    </Layout>
  );
};

Home.getInitialProps = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  const res2 = await fetch('https://jsonplaceholder.typicode.com/users');
  const data2 = await res2.json();
  return { users: data2, posts: data };
};

export default Home;
