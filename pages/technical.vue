/* eslint-disable vue/html-self-closing */
<template>
  <div>
    <v-row>
      <v-col>
        <h2>
          AS31712 - Gigastream plc Peering & Transit Information
        </h2>

        <h2>General Information</h2>
        <p>
          Gigastream plc is a leading provider of Internet services in the UK. In addition to Internet access solutions,
          network consultancy and related services. Gigastream provide wholesale network and telecommunications services
          to the ISP and hosting market.
        </p>
        <p>
          For more information on Gigastream's IP Transit services please contact sales@gigastream.net.
        </p>

        <h2>Autonomous System</h2>

        <p>Gigastream operate a single autonomous system AS31712.</p>

        <p>
          Routing information is maintained in the RIPE Internet Routing Registry (IRR). The AS-SET (or AS-MACRO)
          AS-GIGASTREAM shows those autonomous systems transiting through AS31712. Some customers may only maintain
          their routing information in other IRR's such as the RAdb. We also maintain entries in the PeeringDB.
        </p>

        <h2>Routing Policies</h2>
        <p>
          The routing policies of AS31712 are set out in the Routing Policy document.
        </p>

        <h2>Peering Points</h2>
        <p>
          Gigastream maintains presence at the following carrier neutral datacentres in the UK. In addition to providing
          IP Transit or private peering sessions at these locations we can assist with backhaul carrier neutral
          datacentres in the UK.
        </p>
      </v-col>
    </v-row>

    <v-row class="mb-6">
      <v-col offset="3" md="3">
        <strong>Datacentre</strong>
        <br />
        Telecity Redbus Sovereign House
        <br />

        Telstra London Hosting Centre
        <br />
        Telehouse North
        <br />

        BlueSquare 1
        <br />

        Gigastream Oxford1
        <br />
      </v-col>
      <v-col>
        <strong>Location</strong>
        <br />
        London, UK
        <br />
        London, UK
        <br />

        London, UK
        <br />

        Maidenhead, UK
        <br />
        Oxford, UK
        <br />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p>
          Gigastream maintains presence at the following exchange points where we can arrange public or private peering
          (subject to the regulations of the IXP).
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col offset="3" md="3">
        <strong>Exchange</strong> <br />
        LONAP
      </v-col>
      <v-col>
        <strong>Location</strong>
        <br />
        London, UK</v-col
      >
    </v-row>

    <v-row>
      <v-col>
        <h2>Settlement Free Peering</h2>
        Gigastream offer settlement free peering for networks meeting certain criteria subject to our
        <nuxt-link to="/PeeringPolicy">Peering Policy</nuxt-link> . For more information contact peering@gigastream.net.
      </v-col>
    </v-row>
  </div>
</template>
