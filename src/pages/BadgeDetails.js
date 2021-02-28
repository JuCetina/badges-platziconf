import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';

import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';


export default function BadgeDetails(props){
    return(
        <>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{props.data.firstName} {props.data.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge avatarUrl={props.data.avatarUrl} firstName={props.data.firstName} lastName={props.data.lastName} jobTitle={props.data.jobTitle} twitter={props.data.twitter} />
                    </div>
                    <div className="col-6">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary mb-4" to={`/badges/${props.data.id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">Delete</button>
                                <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDelete}>
                                    Lorem Ipsum
                                </DeleteBadgeModal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}