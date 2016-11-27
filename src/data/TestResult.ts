/// <amd-module name="data/TestResult"/>

export interface TestResult {
    group: string;
    name: string;
    duration: number;
    count: number;
    throughput: string;
    agent: string;
}
