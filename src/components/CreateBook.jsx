import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100ch',
    },
}));

function CreateBook (props) {
    const classes = useStyles();
    const [toggler, setToggler] = useState(false);

    const [book, setBook] = useState({
        genre: '',
        format: '',
        title: '',
        author: '',
        enteredBy: (props.userId),
        datePurchased: '',
        onLoan: (toggler)
    });

    function handleToggler(e) {
        setToggler({ ...toggler, [e.target.name]: e.target.checked});
    };

    function handleChange(e) {
        const { name, value } = e.target;
    
        setBook(prevBook => {
          return {
            ...prevBook,
            [name]: value
          };
        });
      }

      function submitBook(e) {
          e.preventDefault();
          props.onAdd(book);
          setBook({
            genre: '',
            title: '',
            enteredBy: (props.userId),
            datePurchased: '',
            onLoan: false,
            author: '',
            format: '',
          })
      }
    return (
        <div className="createbook">
        <Typography variant='h3' style={{ marginLeft: 10}}>Add a New Book to Your Shelf</Typography>
        <Paper style={{padding: 40}}>
        <form onSubmit={submitBook} className={classes.container} noValidate>
            <TextField
                onChange={handleChange}
                id="outlined-full-width"
                label="Title"
                style={{ margin: 8 }}
                placeholder="Book Title"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <TextField
                onChange={handleChange}
                id="outlined-full-width"
                label="Author"
                style={{ margin: 8 }}
                placeholder="Author's Name"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <TextField
                onChange={handleChange}
                id="outlined-full-width"
                label="Genre"
                style={{ margin: 8 }}
                placeholder="Fantasy, Litarature, Nonfiction..."
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <TextField
                onChange={handleChange}
                id="outlined-full-width"
                label="Format"
                style={{ margin: 8 }}
                placeholder="Print, Digital, Audio..."
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <TextField
                onChange={handleChange}
                id="datePurchased"
                label="Purchased On:"
                type="date"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
            />
            <Typography style={{ marginTop: 40 }} component="div">
            <Grid style={{ marginBottom: 20}} item>Is anyone currently borrowing this book from you?</Grid>
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid style={{marginRight: 28}} item>no</Grid>
                    <Grid item>
                        <FormControlLabel
                            control={<Switch checked={toggler.true} onChange={handleToggler}/>}
                        />
                    </Grid>
                    <Grid item>yes</Grid>
                </Grid>
            </Typography>
            <Button 
                type= "submit"
                variant="contained" 
                color="primary"
            >
                Add Book
            </Button>
        </form>
        </Paper>
        </div>
    )
}

export default CreateBook;