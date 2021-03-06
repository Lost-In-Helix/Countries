import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import truncate from '../utils/truncate';

function CountryCard({name, region, population, capital, flag}) {

  return (
    <div style={{ padding: "20px 25px", cssFloat:"left", width: "20%" }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={ flag }
            alt={ name }
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              { truncate(name, 25) }
            </Typography>
            <TableContainer component={Paper}>
            <Table>
              <TableBody>
                  <TableRow>
                    <TableCell>Region:</TableCell>
                    <TableCell>{ region }</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Population:</TableCell>
                    <TableCell>{ population }</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Capital:</TableCell>
                    <TableCell>{ truncate(capital, 10) }</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
  }

  CountryCard.propTypes = {
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    population: PropTypes.number.isRequired,
    capital: PropTypes.string.isRequired,
    flag: PropTypes.any.isRequired
  }

  export default CountryCard;
