# CareSense Clinical Intelligence Demo

CareSense is an independent proof-of-concept clinical intelligence dashboard built using synthetic aged-care monitoring data.

The project demonstrates how resident, sensor, vital-sign and safety-event data could be transformed into useful monitoring information for care teams.

## Live Demo

https://sylvesterdm.github.io/caresense-clinical-intelligence-demo/

## Project Purpose

The goal of this prototype is to explore how data from smart sensors and monitoring systems can be transformed into a simple clinical intelligence interface that supports care staff with timely and understandable information.

## Features

- Resident monitoring dashboard
- Heart-rate trend visualisation
- Simulated clinical and safety alerts
- Fall detection alert example
- Device availability monitoring
- Data quality and sensor health indicators
- Conceptual data-flow architecture
- Responsive web interface

## Data Quality Monitoring

The prototype demonstrates several important data-quality concepts:

- **Completeness** – whether expected sensor readings are received
- **Validity** – whether readings pass defined validation checks
- **Timeliness** – whether monitoring data is arriving when expected
- **Availability** – whether monitoring devices are actively reporting

## Conceptual Data Flow

Smart Sensors → Data Ingestion → Data Validation → Clinical Intelligence → Dashboard & Alerts → Care Staff

This is a conceptual architecture created specifically for this portfolio prototype.

## Technology Used

- HTML
- CSS
- JavaScript
- JSON
- Chart.js
- GitHub
- GitHub Pages

## Synthetic Dataset

The application uses fictional resident and sensor-monitoring data stored in `residents.json`.

No real resident, patient or healthcare data is used.

## AI-Assisted Development

AI assistance was used to accelerate parts of the HTML, CSS and JavaScript development while I worked through the project structure, data requirements, dashboard design, data-quality concepts and deployment process.

## Disclaimer

This is an independent portfolio project created for learning and demonstration purposes.

All resident names, measurements, alerts and events are fictional. The project does not represent the actual platform, architecture, data, clinical rules or intellectual property of DreamsEdge or any other organisation.

The clinical statuses and alert examples shown in this prototype are illustrative only and are not medically validated thresholds.
