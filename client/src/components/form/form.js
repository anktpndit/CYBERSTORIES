import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    //using useState hook to keep tbe state of the form component
    const [postData, setPostData] = useState({ creator: '', title: '', story: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((story) => story._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    // useEffect(() => {
    //     if (post) setPostData(post);
    // }, [post]);

    const clear = () => {
        // setCurrentId(0);
        setPostData({ creator: '', title: '', story: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        // } else {
        //     dispatch(updatePost(currentId, postData));
        //     clear();
        // }
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Post Your Horror Story'}</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="Story" variant="outlined" label="Story" fullWidth multiline rows={4} value={postData.story} onChange={(e) => setPostData({ ...postData, story: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;