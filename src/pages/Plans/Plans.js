import {
  createMuiTheme,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import BackArrow from "../../assets/images/backArrow.png";
import Chat from "../../assets/images/Chat.png";
import PlansCover from "../../assets/images/plansCover.png";
import Check from "../../assets/images/check.png";
import "./plans.scss";
import { PLANS_FEATURES } from "./data";
import { useHistory } from "react-router";

function createData(pricingTier, takerFee, makerFee) {
  return { pricingTier, takerFee, makerFee };
}

const rows = [
  createData("Up to $10k", "0.50%", "0.50%"),
  createData("$10k - $50k", "0.35%", "0.35%"),
  createData("$50k - $100k", "0.25%", "0.25%"),
  createData("$100k - $1m", "0.20%", "0.10%"),
  createData("$1m - $10m", "0.18%", "0.08%"),
  createData("$10m - $50m", "0.15%", "0.10%"),
  createData("$50m - $100m", "0.10%", "0.08%"),
  createData("$100m - $300m", "0.07%", "0.00%"),
  createData("$100m - $500m", "0.05%", "0.00%"),
  createData("$500m - $1b", "0.04%", "0.00%"),
  createData("$1b+", "0.04%", "0.00%"),
];

const theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 320,
      md: 768,
      lg: 1025,
    },
  },
});

const Plans = () => {
  const history = useHistory();

  const goBack = () => history.goBack();

  return (
    <ThemeProvider theme={theme}>
      <div className="plans">
        <div className="plans__cover">
          <img className="plans__cover__img" src={PlansCover} alt="cover" />
        </div>
        <div className="plans__content">
          <div className="plans__content__title">
            <div className="plans__content__title__content">
              <img src={BackArrow} alt="back" onClick={goBack} />
              <div>Pricing and fees</div>
            </div>
            <p>
              As Veserus, we believe that everything should be simple and we
              create our pricing policy accordingly. We divide the pricing
              policy into two as for Users and for Business.
            </p>
          </div>
          <div className="plans__content__table">
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Pricing tier</TableCell>
                    <TableCell align="center">Taker Fee</TableCell>
                    <TableCell align="center">Maker Fee</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      className={
                        index % 2 === 0
                          ? "plans__content__table__colorfulRow"
                          : ""
                      }
                      key={row.pricingTier}
                    >
                      <TableCell scope="row">{row.pricingTier}</TableCell>
                      <TableCell align="center">{row.takerFee}</TableCell>
                      <TableCell align="center">{row.makerFee}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="plans__content__pr">
            <div className="plans__content__pr__title">For Users</div>
            <p>
              Users make each transaction with a cost of 1% of the transaction
              value.
            </p>
          </div>
          <div className="plans__content__pr">
            <div className="plans__content__pr__title">For Businesses</div>
            <p>
              Businesses make each transaction with a cost of 1% of the
              transaction value. Although we will be rolling out soon, it is
              possible for businesses that want to convert the crypto asset to
              local currency at a cost of 0.5% per conversion.
            </p>
          </div>
          <div className="plans__content__pr">
            <div className="plans__content__pr__title">How does it work?</div>
            <p>
              After the required commission cost is deducted from the
              transactions made via your wallet address or the payment widget,
              the relevant amount is transferred to your account within
              milliseconds, through the secure infrastructure of Veserus.
            </p>
          </div>
          <div className="plans__content__features">
            <Grid container>
              {PLANS_FEATURES.map((plan) => (
                <Grid key={plan.title} item sm={12} md={6} lg={4}>
                  <div
                    key={plan.title}
                    className="plans__content__features__feature"
                  >
                    <div className="plans__content__features__feature__image">
                      <img src={plan.img} alt="featImage" />
                    </div>
                    <div className="plans__content__features__feature__title">
                      {plan.title}
                    </div>
                    {plan.points.map((point) => (
                      <p key={point}>
                        <img src={Check} alt="check" /> {point}
                      </p>
                    ))}
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Plans;
