import {
  makeStyles,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';

const useStyle = makeStyles({
  smallText: {
    fontSize: 14,
    verticalAlign: 'baseline',
    '& > *': {
      fontSize: 14,
      marginTop: 10,
    },
  },
  greyTextColor: {
    color: '#878787',
  },
  badge: {
    marginRight: 10,
    color: '#00CC00',
    fontSize: 15,
  },
  wrapper: {
    display: 'flex',
  },
});

const ProductDetail = ({ product }) => {
  const classes = useStyle();
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <Table>
        <TableBody>
          <TableRow className={classes.smallText}>
            <TableCell className={classes.greyTextColor}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </TableRow>
          <TableRow className={classes.smallText}>
            <TableCell className={classes.greyTextColor}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </TableRow>

          <TableRow className={classes.smallText}>
            <TableCell className={classes.greyTextColor}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
