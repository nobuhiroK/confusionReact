import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';



    function RenderComments({dish}){
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


    function RenderDish({dish}){
       // var str = JSON.stringify(dish, null, 2); // spacing level = 2
        console.log(dish)
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
    const  DishDetail = (props) => {
        
        return (
            <div className='container'>
                <div className="row">    
                    <RenderDish dish={props.dish} />
                    <RenderComments dish={props.dish} />
                    
                    

                    
                    
                </div>
            </div>
        );
    }

export default DishDetail;