import React from 'react';
import { Link } from 'react-router-dom';

export default ({ info }) => <li><Link to={`/repositories/${info.id}`}>{info.full_name}</Link></li>
