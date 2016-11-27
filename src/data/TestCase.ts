/// <amd-module name="data/TestCase"/>

export interface TestCase {

    prepare?(): void;

    run(): void;

    clean?(): void;

    count: number;
}
