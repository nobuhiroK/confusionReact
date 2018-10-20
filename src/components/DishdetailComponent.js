import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';



class DishDetail extends Component{

    constructor(props){

        super(props);
        
    }

    renderComments(dish){
        //console.log("renderComments invoked")
        //console.log(dish);
        if (dish){
            const commentsList = dish.comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
            //console.log(commentsList)
        })
            return (
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {commentsList}
                    </ul>
                </div>

                )
            

        } else{

                    return(

                        <div></div>

                        );

                    }


    }


    renderDish(dish){

        if (dish) {

            return(
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                </div>
                    );

                } else{

                    return(

                        <div></div>

                        );

                    }

    }
    render() {
        
        return (
                <div className="row">    
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish)}
                
                </div>
                
        );
    }
}
export default DishDetail;


