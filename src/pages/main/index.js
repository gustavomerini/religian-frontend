import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class Main extends Component {
    state = {
        teachings: [],
    }

    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    componentDidMount() {
        this.loadTeachings();
    };

    loadTeachings = async () => {
        const { data } = await api.get('/teachings');

        this.setState({ teachings: data });
    };

    render() {
        const { teachings } = this.state;

        return (
            <div className="teaching-list">
                {teachings.map(teaching => (
                    <article key={teaching._id}>
                        <strong>{teaching.title}</strong>
                        <p>{teaching.text}</p>

                        <div className="teaching-footer">

                            <div className="teaching-date">
                                <p>{new Date(teaching.posted).toLocaleDateString("pt-BR", this.options)}</p>
                            </div>

                            <div className="profile-picture">
                                <img src="https://religian-api.herokuapp.com/uploads/9dcf82d514dc4976af8820840e9c759c.jpg" alt={`${teaching.author.about}`}></img>
                            </div>

                            <div className="author-name">
                                <p>{`${teaching.author.lastName} ${teaching.author.firstName}`}</p>
                            </div>

                            <div className="author-rank">
                                <p>Religian {teaching.author.rank}</p>
                            </div>
                        </div>

                    </article>
                ))}
            </div>
        );
    }
}