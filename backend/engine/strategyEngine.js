const config = require("../config/strategyConfig");

const calculateEMA = require("../indicators/ema");
const calculateRSI = require("../indicators/rsi");
const calculateATR = require("../indicators/atr");
const calculateVWAP = require("../indicators/vwap");
const calculateSupertrend = require("../indicators/supertrend");
const analyzeVolume = require("../indicators/volume");

class StrategyEngine {

    analyze(candles) {

        if (!candles || candles.length < 25) {

            return {

                signal: "WAIT",

                confidence: 0,

                reason: "Insufficient candle data"

            };

        }

        const closes =
            candles.map(c => Number(c[4]));

        const ema =
            calculateEMA(closes);

        const rsi =
            calculateRSI(closes);

        const atr =
            calculateATR(candles);

        const vwap =
            calculateVWAP(candles);

        const supertrend =
            calculateSupertrend(
                candles,
                config.indicators.supertrendMultiplier
            );

        const volume =
            analyzeVolume(candles);

        const prevEMA9 = ema.ema9.at(-2);
const lastEMA9 = ema.ema9.at(-1);

const prevEMA21 = ema.ema21.at(-2);
const lastEMA21 = ema.ema21.at(-1);

        const lastRSI =
            rsi.at(-1);

        const lastVWAP =
            vwap.at(-1);

        const lastClose =
            closes.at(-1);

        let buyConfidence = 0;
        let sellConfidence = 0;

        const emaBullishCross =
            prevEMA9 <= prevEMA21 &&
            lastEMA9 > lastEMA21;

        const emaBearishCross =
            prevEMA9 >= prevEMA21 &&
            lastEMA9 < lastEMA21;

        if (emaBullishCross) buyConfidence += 20;
        if (emaBearishCross) sellConfidence += 20;

        if (lastRSI > 55) buyConfidence += 20;
        if (lastRSI < 45) sellConfidence += 20;

        if (lastClose > lastVWAP) buyConfidence += 20;
        if (lastClose < lastVWAP) sellConfidence += 20;

        if (volume.highVolume) {
            buyConfidence += 20;
            sellConfidence += 20;
        }

        const stDirection =
            supertrend.length
                ? supertrend.at(-1).direction
                : "NONE";

        if (stDirection === "BUY") buyConfidence += 20;
        if (stDirection === "SELL") sellConfidence += 20;

        console.log({
            buyConfidence,
            sellConfidence,
            rsi:lastRSI,
            supertrend:stDirection
        });

        if (
            buyConfidence >= config.ai.confidenceThreshold &&
            buyConfidence >= sellConfidence
        ) {

            return {

                signal: "BUY",

                confidence: buyConfidence,

                indicators: {

                    ema9: lastEMA9,

                    ema21: lastEMA21,

                    rsi: lastRSI,

                    atr: atr.at(-1),

                    vwap: lastVWAP,

                    supertrend:
                        supertrend.at(-1),

                    volume

                }

            };

        }

        if (
            sellConfidence >= config.ai.confidenceThreshold &&
            sellConfidence > buyConfidence
        ) {

            return {

                signal: "SELL",

                confidence: sellConfidence,

                indicators: {

                    ema9: lastEMA9,

                    ema21: lastEMA21,

                    rsi: lastRSI,

                    atr: atr.at(-1),

                    vwap: lastVWAP,

                    supertrend:
                        supertrend.at(-1),

                    volume

                }

            };

        }

return {

    signal: "WAIT",

    confidence: Math.max(buyConfidence, sellConfidence),

    reason: {

        emaTrend: lastEMA9 > lastEMA21,

        rsi: lastRSI > 55,

        vwap: lastClose > lastVWAP,

        volume: volume.highVolume,

        supertrend:
            supertrend.length
                ? supertrend.at(-1).direction
                : "NONE"

    },

    indicators: {

        ema9: lastEMA9,

        ema21: lastEMA21,

        rsi: lastRSI,

        atr: atr.at(-1),

        vwap: lastVWAP,

        supertrend:
            supertrend.at(-1),

        volume

    }

};

    }

}

module.exports =
    new StrategyEngine();
