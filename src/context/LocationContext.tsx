import React, { createContext, useState, useEffect } from "react";

const defaultState: ILocationContext = {
  location: { pathname: "" }
};

const LocationContext = createContext(defaultState);

export const LocationProvider: React.SFC<ILocationProviderProps> = ({
  children,
  location: defaultLocation
}) => {
  const [initialized, setInitialized] = useState(false);
  const [location] = useState(defaultLocation);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  });

  return (
    <LocationContext.Provider
      value={{
        location
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;

export interface ILocation {
  pathname: string;
}

interface ILocationContext {
  location: ILocation;
}

interface ILocationProviderProps extends ILocationContext {
  children: any;
}
