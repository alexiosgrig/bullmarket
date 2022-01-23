import React, { useState, useEffect, useContext } from "react";
import { financialmodelingprepApikey } from "../apikey/apikey";
import { Context } from "../Context/Context";
import "../css/App.css";
export const Ratio = () => {
  const [context] = useContext(Context);
  const [ratio, setRatio] = useState({
    dividendYielTTM: "",
    dividendYielPercentageTTM: "",
    peRatioTTM: "",
    pegRatioTTM: "",
    payoutRatioTTM: "",
    currentRatioTTM: "",
    quickRatioTTM: "",
    cashRatioTTM: "",
    daysOfSalesOutstandingTTM: "",
    daysOfInventoryOutstandingTTM: "",
    operatingCycleTTM: "",
    daysOfPayablesOutstandingTTM: "",
    cashConversionCycleTTM: "",
    grossProfitMarginTTM: "",
    operatingProfitMarginTTM: "",
    pretaxProfitMarginTTM: "",
    netProfitMarginTTM: "",
    effectiveTaxRateTTM: "",
    returnOnAssetsTTM: "",
    returnOnEquityTTM: "",
    returnOnCapitalEmployedTTM: "",
    netIncomePerEBTTTM: "",
    ebtPerEbitTTM: "",
    ebitPerRevenueTTM: "",
    debtRatioTTM: "",
    debtEquityRatioTTM: "",
    longTermDebtToCapitalizationTTM: "",
    totalDebtToCapitalizationTTM: "",
    interestCoverageTTM: "",
    cashFlowToDebtRatioTTM: "",
    companyEquityMultiplierTTM: "",
    receivablesTurnoverTTM: "",
    payablesTurnoverTTM: "",
    inventoryTurnoverTTM: "",
    fixedAssetTurnoverTTM: "",
    assetTurnoverTTM: "",
    operatingCashFlowPerShareTTM: "",
    freeCashFlowPerShareTTM: "",
    cashPerShareTTM: "",
    operatingCashFlowSalesRatioTTM: "",
    freeCashFlowOperatingCashFlowRatioTTM: "",
    cashFlowCoverageRatiosTTM: "",
    shortTermCoverageRatiosTTM: "",
    capitalExpenditureCoverageRatioTTM: "",
    dividendPaidAndCapexCoverageRatioTTM: "",
    priceBookValueRatioTTM: "",
    priceToBookRatioTTM: "",
    priceToSalesRatioTTM: "",
    priceEarningsRatioTTM: "",
    priceToFreeCashFlowsRatioTTM: "",
    priceToOperatingCashFlowsRatioTTM: "",
    priceCashFlowRatioTTM: "",
    priceEarningsToGrowthRatioTTM: "",
    priceSalesRatioTTM: "",
    dividendYieldTTM: "",
    enterpriseValueMultipleTTM: "",
    priceFairValueTTM: "",
    dividendPerShareTTM: "",
  });
  async function fetchRatio() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/ratios-ttm/AAPL?apikey=${financialmodelingprepApikey}`
    );
    const data = await res.json();
    console.log([0]);
    setRatio({
      dividendYielTTM: data[0].dividendYielTTM.toFixed(3),
      dividendYielPercentageTTM: data[0].dividendYielPercentageTTM.toFixed(3),
      peRatioTTM: data[0].peRatioTTM.toFixed(3),
      pegRatioTTM: data[0].pegRatioTTM.toFixed(3),
      payoutRatioTTM: data[0].payoutRatioTTM.toFixed(3),
      currentRatioTTM: data[0].currentRatioTTM.toFixed(3),
      quickRatioTTM: data[0].quickRatioTTM.toFixed(3),
      cashRatioTTM: data[0].cashRatioTTM.toFixed(3),
      daysOfSalesOutstandingTTM: data[0].daysOfSalesOutstandingTTM.toFixed(3),
      daysOfInventoryOutstandingTTM:
        data[0].daysOfInventoryOutstandingTTM.toFixed(3),
      operatingCycleTTM: data[0].operatingCycleTTM.toFixed(3),
      daysOfPayablesOutstandingTTM:
        data[0].daysOfPayablesOutstandingTTM.toFixed(3),
      cashConversionCycleTTM: data[0].cashConversionCycleTTM.toFixed(3),
      grossProfitMarginTTM: data[0].grossProfitMarginTTM.toFixed(3),
      operatingProfitMarginTTM: data[0].operatingProfitMarginTTM.toFixed(3),
      pretaxProfitMarginTTM: data[0].pretaxProfitMarginTTM.toFixed(3),
      netProfitMarginTTM: data[0].netProfitMarginTTM.toFixed(3),
      effectiveTaxRateTTM: data[0].effectiveTaxRateTTM.toFixed(3),
      returnOnAssetsTTM: data[0].returnOnAssetsTTM.toFixed(3),
      returnOnEquityTTM: data[0].returnOnEquityTTM.toFixed(3),
      returnOnCapitalEmployedTTM: data[0].returnOnCapitalEmployedTTM.toFixed(3),
      netIncomePerEBTTTM: data[0].netIncomePerEBTTTM.toFixed(3),
      ebtPerEbitTTM: data[0].ebtPerEbitTTM.toFixed(3),
      ebitPerRevenueTTM: data[0].ebitPerRevenueTTM.toFixed(3),
      debtRatioTTM: data[0].debtRatioTTM.toFixed(3),
      debtEquityRatioTTM: data[0].debtEquityRatioTTM.toFixed(3),
      totalDebtToCapitalizationTTM:
        data[0].totalDebtToCapitalizationTTM.toFixed(3),
      interestCoverageTTM: data[0].interestCoverageTTM.toFixed(3),
      cashFlowToDebtRatioTTM: data[0].cashFlowToDebtRatioTTM.toFixed(3),
      companyEquityMultiplierTTM: data[0].companyEquityMultiplierTTM.toFixed(3),
      receivablesTurnoverTTM: data[0].receivablesTurnoverTTM.toFixed(3),
      payablesTurnoverTTM: data[0].payablesTurnoverTTM.toFixed(3),
      inventoryTurnoverTTM: data[0].inventoryTurnoverTTM.toFixed(3),
      fixedAssetTurnoverTTM: data[0].fixedAssetTurnoverTTM.toFixed(3),
      assetTurnoverTTM: data[0].assetTurnoverTTM.toFixed(3),
      operatingCashFlowPerShareTTM:
        data[0].operatingCashFlowPerShareTTM.toFixed(3),
      freeCashFlowPerShareTTM: data[0].freeCashFlowPerShareTTM.toFixed(3),
      cashPerShareTTM: data[0].cashPerShareTTM.toFixed(3),
      operatingCashFlowSalesRatioTTM:
        data[0].operatingCashFlowSalesRatioTTM.toFixed(3),
      freeCashFlowOperatingCashFlowRatioTTM:
        data[0].freeCashFlowOperatingCashFlowRatioTTM.toFixed(3),
      cashFlowCoverageRatiosTTM: data[0].cashFlowCoverageRatiosTTM.toFixed(3),
      shortTermCoverageRatiosTTM: data[0].shortTermCoverageRatiosTTM.toFixed(3),
      capitalExpenditureCoverageRatioTTM:
        data[0].capitalExpenditureCoverageRatioTTM.toFixed(3),
      dividendPaidAndCapexCoverageRatioTTM:
        data[0].dividendPaidAndCapexCoverageRatioTTM.toFixed(3),
      priceBookValueRatioTTM: data[0].priceBookValueRatioTTM.toFixed(3),
      priceToBookRatioTTM: data[0].priceToBookRatioTTM.toFixed(3),
      priceToSalesRatioTTM: data[0].priceToSalesRatioTTM.toFixed(3),
      priceEarningsRatioTTM: data[0].priceEarningsRatioTTM.toFixed(3),
      priceToFreeCashFlowsRatioTTM:
        data[0].priceToFreeCashFlowsRatioTTM.toFixed(3),
      priceToOperatingCashFlowsRatioTTM:
        data[0].priceToOperatingCashFlowsRatioTTM.toFixed(3),
      priceCashFlowRatioTTM: data[0].priceCashFlowRatioTTM.toFixed(3),
      priceEarningsToGrowthRatioTTM:
        data[0].priceEarningsToGrowthRatioTTM.toFixed(3),
      priceSalesRatioTTM: data[0].priceSalesRatioTTM.toFixed(3),
      dividendYieldTTM: data[0].dividendYieldTTM.toFixed(3),
      enterpriseValueMultipleTTM: data[0].enterpriseValueMultipleTTM.toFixed(3),
      priceFairValueTTM: data[0].priceFairValueTTM.toFixed(3),
      dividendPerShareTTM: data[0].dividendPerShareTTM.toFixed(3),
    });
  }
  useEffect(() => {
    fetchRatio();
  }, [context]);

  return (
    <>
      <div style={{ backgroundColor: "#f5f5f5", height: "auto" }}>
        <div className="RatioTable">
          <table>
            <tbody>
              <tr>
                <th>Ratios</th>
              </tr>
              <tr>
                <td>Dividend Yield : {ratio.dividendYielTTM}</td>
                <td>
                  Dividend Yield Percentage :
                  {ratio.dividendYielPercentageTTM + "%"}
                </td>
                <td>Dividend Yield : P/E Ratio: {ratio.peRatioTTM}</td>
                <td>Dividend Yield : PEG Ratio: {ratio.pegRatioTTM}</td>
                <td>Dividend Yield : PEG Ratio: {ratio.pegRatioTTM}</td>
              </tr>
              <tr>
                <td>Payout Ratio: {ratio.payoutRatioTTM}</td>
                <td>Current Ratio {ratio.currentRatioTTM}</td>
                <td>Quick Ratio: {ratio.quickRatioTTM}</td>
                <td>
                  Days of Sales Outstanding: {ratio.daysOfSalesOutstandingTTM}
                </td>
                <td>
                  Days of Sales Outstanding: {ratio.daysOfSalesOutstandingTTM}
                </td>
              </tr>
              <tr>
                <td>
                  Days of Sales Outstanding: {ratio.daysOfSalesOutstandingTTM}
                </td>
                <td>Cash Ratio: {ratio.cashRatioTTM}</td>
                <td>
                  Days of inventory Outstanding:
                  {ratio.daysOfInventoryOutstandingTTM}
                </td>
                <td>Operating Cycle: {ratio.operatingCycleTTM}</td>
                <td>
                  Days of Payable Outstanding{" "}
                  {ratio.daysOfPayablesOutstandingTTM}
                </td>
              </tr>
              <tr>
                <td>Cash conversion cycle {ratio.cashConversionCycleTTM}</td>
                <td>Gross profit margin: {ratio.grossProfitMarginTTM}</td>
                <td>
                  Operating profit margin: {ratio.operatingProfitMarginTTM}
                </td>
                <td>Pre tax profit margin: {ratio.pretaxProfitMarginTTM}</td>
                <td>Net profit margin: {ratio.netProfitMarginTTM}</td>
              </tr>
              <tr>
                <td>Effective tax rate: {ratio.effectiveTaxRateTTM}</td>
                <td>Return on assets: {ratio.returnOnAssetsTTM}</td>
                <td>Return on equity {ratio.returnOnEquityTTM}</td>
                <td>
                  Return on capital employed: {ratio.returnOnCapitalEmployedTTM}
                </td>
                <td>Net income per EBT: {ratio.netIncomePerEBTTTM}</td>
              </tr>
              <tr>
                <td>EBT per EBIT: {ratio.ebtPerEbitTTM}</td>
                <td>EBIT per Revenue: {ratio.ebitPerRevenueTTM}</td>
                <td>Debt ratio: {ratio.debtRatioTTM}</td>
                <td>Debt equity ratio: {ratio.debtEquityRatioTTM}</td>
                <td>
                  Total debt to capitalization:
                  {ratio.totalDebtToCapitalizationTTM}
                </td>
              </tr>
              <tr>
                <td>Interest Coverage: {ratio.interestCoverageTTM}</td>
                <td>Cashflow to debt ratio: {ratio.cashFlowToDebtRatioTTM}</td>
                <td>
                  Company equity mutliplier: {ratio.companyEquityMultiplierTTM}
                </td>
                <td>Receibables turnover: {ratio.receivablesTurnoverTTM}</td>
                <td>Payables turnover: {ratio.payablesTurnoverTTM}</td>
              </tr>
              <tr>
                <td>Invetory turnover: {ratio.inventoryTurnoverTTM}</td>
                <td>Fixed assets turnover {ratio.fixedAssetTurnoverTTM}</td>
                <td>Assets turnover {ratio.assetTurnoverTTM}</td>
                <td>
                  Operating cash flow per share
                  {ratio.operatingCashFlowPerShareTTM}
                </td>
                <td>
                  Free cashflow operating cashflow ratio:
                  {ratio.freeCashFlowOperatingCashFlowRatioTTM}
                </td>
              </tr>
              <tr>
                <td>Cash per share: {ratio.cashPerShareTTM}</td>
                <td>
                  Operating cash flow sales ratio:
                  {ratio.operatingCashFlowSalesRatioTTM}
                </td>
                <td>
                  Free cashflow per share: {ratio.freeCashFlowPerShareTTM}
                </td>
                <td>
                  Operating cashflow sales ratio:
                  {ratio.operatingCashFlowSalesRatioTTM}
                </td>
                <td>
                  Free cashflow operating cash flow ratio:
                  {ratio.freeCashFlowOperatingCashFlowRatioTTM}
                </td>
              </tr>
              <tr>
                <td>
                  Cash flow coverage ratios: {ratio.cashFlowCoverageRatiosTTM}
                </td>
                <td>
                  Short term coverage ratios: {ratio.shortTermCoverageRatiosTTM}
                </td>
                <td>
                  Capital expenditure coverage ratio:
                  {ratio.capitalExpenditureCoverageRatioTTM}
                </td>
                <td>
                  Dividend paid and capex coverage ratio:
                  {ratio.dividendPaidAndCapexCoverageRatioTTM}
                </td>
                <td>Price book value ratio: {ratio.priceBookValueRatioTTM}</td>
              </tr>
              <tr>
                <td>Price to book ratio: {ratio.priceToBookRatioTTM}</td>
                <td>Price to sales ratio: {ratio.priceToSalesRatioTTM}</td>
                <td>Price earnings ratio: {ratio.priceEarningsRatioTTM}</td>
                <td>
                  Price to free cashflow ratio:
                  {ratio.priceToFreeCashFlowsRatioTTM}
                </td>
                <td>
                  Price to operating cashflows ratio:
                  {ratio.priceToOperatingCashFlowsRatioTTM}
                </td>
              </tr>
              <tr>
                <td>Price cashflow ratio: {ratio.priceCashFlowRatioTTM}</td>
                <td>
                  Price earings to growth ratio:{" "}
                  {ratio.priceEarningsToGrowthRatioTTM}{" "}
                </td>
                <td>Price sales ratio: {ratio.priceSalesRatioTTM}</td>
                <td>Dividend yield: {ratio.dividendYieldTTM}</td>
                <td>
                  Enterprise value mutliplier:{" "}
                  {ratio.enterpriseValueMultipleTTM}
                </td>
              </tr>
              <tr>
                <td>Price fair value: {ratio.priceFairValueTTM}</td>
                <td>Dividend per share: {ratio.dividendPerShareTTM}</td>
                <td>Dividend yield: {ratio.dividendYieldTTM}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

//
