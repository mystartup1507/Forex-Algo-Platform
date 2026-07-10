import MetaTrader5 as mt5
from connector import connector


class MT5Market:

    def get_symbols(self):

        status = connector.connect()

        if not status["success"]:
            return status

        symbols = mt5.symbols_get()

        if symbols is None:

            connector.disconnect()

            return {
                "success": False,
                "message": "Unable to fetch symbols.",
                "data": None
            }

        symbol_list = []

        for symbol in symbols:

            symbol_list.append(symbol.name)

        connector.disconnect()

        return {
            "success": True,
            "message": f"{len(symbol_list)} symbols loaded.",
            "data": symbol_list
        }


market_service = MT5Market()
