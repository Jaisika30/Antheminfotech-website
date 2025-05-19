import React from "react";
import { useParams } from "react-router-dom";

import SEO from "../../components/SEO.jsx";
import Header from "../../partials/header/Header.jsx";
import Breadcrumb from "../../container/Breadcrumb/Breadcrumb.js";
import BlogCategoryContainer from "../../container/BlogGrid/BlogCategoryContainer.js";
import CallToAction from "../../container/CallToAction/CallToAction.js";
import Footer from "../../container/Footer/Footer.js";
import ScrollToTop from "../../components/ScrollToTop.jsx";

import BlogClassicData from "../../data/blog/BlogClassic.json";
import { slugify } from "../../utils/index.js";

const BlogCategories = () => {
  let { slug } = useParams();
  const data = BlogClassicData.map((blog) => {
    return {
      ...blog,
      categories: blog.categories.filter((cat) => slugify(cat) === slug),
    };
  }).filter((blog) => blog.categories.length > 0);
  const categoryTitle = data[0].categories[0];
  return (
    <React.Fragment>
      <SEO title="Anthem - Blog" />
      <Header />
      <Breadcrumb
        image="images/bg/breadcrumb-bg-four.jpg"
        title={categoryTitle}
        content="Home"
        contentTwo="Blog Classic"
      />
      <BlogCategoryContainer data={data} />
      <CallToAction />
      <Footer />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default BlogCategories;
