import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {BreadcrumbItem} from 'reactstrap';

const Breadcrumb = (props) => {
  return (
    <div className="page-title-box d-flex align-items-center justify-content-between ">
      <div className="page-title-right header-breadcrumbs">
        <ol className="breadcrumb m-0">
          <BreadcrumbItem>
            <Link to="/">{props.title}</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <Link to="#">{props.breadcrumbItem}</Link>
          </BreadcrumbItem>
        </ol>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  title: PropTypes.string,
};

export default Breadcrumb;
